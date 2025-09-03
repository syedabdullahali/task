import { Product } from "./product"

export  interface OrderItem{    
                "product": Product,
                "quantity": 12,
                "price": "30.25"
  }

export  interface OrderDta  {
        "id": number,
        "total_amount": number,
        "total_amount_with_discounte": number,
        "status": "pending",
        "stripe_payment_intent": null,
        "items": OrderItem[],
        "destination":string
  }

export interface PlaceOrder {
  "items": {"product_id": number,
  "quantity": number}[],
  "destination":string
}  