const timelime = [
    {
        id: 1,
        avatar: "https://picsum.photos/500",
        email: "rodrigomaldonadov@gmail.com",
        name: "Rodrigo Maldoando Vasquez",
        message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero dolor, faucibus quis porta eu, malesuada vitae augue. Vestibulum malesuada vel nisl sed volutpat. Vivamus ipsum nisi, commodo in massa ac, tempor sollicitudin libero. Aliquam vel ante sagittis ligula semper tempus vel id quam"
    },
    {
        id: 2,
        avatar: "https://picsum.photos/500",
        email: "abelmaldonadov@gmail.com",
        name: "Abel Maldoando Vasquez",
        message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero dolor, faucibus quis porta eu, malesuada vitae augue. Vestibulum malesuada vel nisl sed volutpat. Vivamus ipsum nisi, commodo in massa ac, tempor sollicitudin libero. Aliquam vel ante sagittis ligula semper tempus vel id quam"
    },
    {
        id: 3,
        avatar: "https://picsum.photos/500",
        email: "diegocalderonvasquez@gmail.com",
        name: "Diego Calderon Vasquez",
        message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed libero dolor, faucibus quis porta eu, malesuada vitae augue. Vestibulum malesuada vel nisl sed volutpat. Vivamus ipsum nisi, commodo in massa ac, tempor sollicitudin libero. Aliquam vel ante sagittis ligula semper tempus vel id quam"
    }
];

export default function handler(req, res) {
    res.status(200).json(timelime);
}
