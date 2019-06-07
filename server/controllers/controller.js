module.exports = {
    add: (req, res) => {
        let db = req.app.get('db');
        db.add_product(req.body).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        });
    },

    getAll: (req, res) => {
        let db = req.app.get('db');
        db.get_all_products().then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })        
    },

    getId: (req, res) => {
        let db = req.app.get('db');
        db.get_product_by_id(req.params.id).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })
    },

    updateProduct: (req, res) => {
        let db = req.app.get('db');
        let params = req.body;
        params.id = req.params.id;
        db.update_product(params).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })
    },

    deleteProduct: (req, res) => {
        let db = req.app.get('db');
        db.delete_product(req.params.id).then(response => {
            res.send(response).status(200);
        }).catch(err => {
            res.send(err).status(500);
        })
    }
}