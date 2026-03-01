import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export function ProductCard() {
    return (
        <Card className="w-96">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src={img}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        {name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        {price}
                    </Typography>
                </div>
            </CardBody>
        </Card>
    );
}

export default ProductCard