const news = [
    {
        "id": "1",
        "title": "Why Amazon makes you click a box to redeem coupons"
    },
    {
        "id": "2",
        "title": "This recession indicator is flashing a warning sign"
    },
    {
        "id": "3",
        "title": "US consumer sentiment fell again amid rising rates, war and inflation"
    },
]

export default function handler(req, res) {
    res.status(200).json(news)
}
