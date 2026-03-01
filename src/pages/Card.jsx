import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export function Card() {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src="https://i.pinimg.com/736x/67/1a/dd/671add85718e4ddc70df0a7ff7621c6a.jpg"
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Starbucks Frappucionos
                </Typography>
                <Typography>
                    This unique Starbucks drink features a coffee pudding base infused with Irish cream flavor, and it's topped with espresso whipped cream and ground espresso powder.
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button>Buy</Button>
            </CardFooter>
        </Card>
    );
}