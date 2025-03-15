from fastapi import FastAPI
from typing import List, Dict, Any
from pydantic import BaseModel


app = FastAPI(
    title="fastapi-sv",
    docs_url="/api/docs",
    openapi_url="/api/openapi.json",
)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/items/{item_id}")
async def read_item(item_id: int):
    return {"item_id": item_id}


# New endpoint for the showcase
class Product(BaseModel):
    id: int
    name: str
    price: float
    description: str
    image_url: str
    category: str


@app.get("/api/products", response_model=List[Dict[str, Any]])
async def get_products():
    """
    Get a list of products for the showcase.
    This endpoint is used by the Svelte frontend.
    """
    products = [
        {
            "id": 1,
            "name": "Premium Headphones",
            "price": 199.99,
            "description": "High-quality wireless headphones with noise cancellation",
            "image_url": "https://placehold.co/100x100?text=Headphones",
            "category": "Electronics",
        },
        {
            "id": 2,
            "name": "Smart Watch",
            "price": 249.99,
            "description": "Fitness tracker with heart rate monitoring and GPS",
            "image_url": "https://placehold.co/100x100?text=Watch",
            "category": "Electronics",
        },
        {
            "id": 3,
            "name": "Ergonomic Keyboard",
            "price": 129.99,
            "description": "Mechanical keyboard with customizable RGB lighting",
            "image_url": "https://placehold.co/100x100?text=Keyboard",
            "category": "Accessories",
        },
        {
            "id": 4,
            "name": "Wireless Mouse",
            "price": 59.99,
            "description": "Precision wireless mouse with long battery life",
            "image_url": "https://placehold.co/100x100?text=Mouse",
            "category": "Accessories",
        },
        {
            "id": 5,
            "name": "Laptop Stand",
            "price": 39.99,
            "description": "Adjustable aluminum laptop stand for better ergonomics",
            "image_url": "https://placehold.co/100x100?text=Stand",
            "category": "Accessories",
        },
    ]
    return products
