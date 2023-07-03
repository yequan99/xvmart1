import { ProductProps } from "../types/mainTypes"

const UpdateProduct = async (product: ProductProps) => {
    try {
        const response = await fetch('/updateProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ product }),
        })

        if (response.ok) {
            console.log("Data sent successfully!")
        } else {
            console.error("Failed to send data!")
        }
        setTimeout(() => window.location.reload(), 3000)
    } catch (error) {
        console.error("Network error:", error)
    }
}

export { UpdateProduct }