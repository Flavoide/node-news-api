import ArticlesController from '../controllers/articles';

export default (app) => {
  const articlesController = new ArticlesController(app.datasource.models.Articles);
  app.route('/articles')
    .get((req, res) => {
      articlesController.getAll()
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .post((req, res) => {
      articlesController.create(req.body)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });

  app.route('/articles/:id')
    .get((req, res) => {
      articlesController.getById(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .put((req, res) => {
      articlesController.update(req.body, req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    })
    .delete((req, res) => {
      articlesController.delete(req.params)
        .then(response => {
          res.status(response.statusCode);
          res.json(response.data);
        });
    });
};
