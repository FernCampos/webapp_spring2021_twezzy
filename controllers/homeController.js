module.exports = {
    showIndex: (req, res) => {
        res.render("index", {layout: './layouts/index-layout'})
    },
    showFeed: (req, res) => {
        res.render("feed")
    }
}