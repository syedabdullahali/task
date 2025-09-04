# emails.py
from django.core.mail import EmailMessage
from django.conf import settings

def send_order_invoice_email(order):
    """
    Sends an invoice email for a given order.
    `order` is an instance of Order model.
    """
    user = order.user
    subject = f"Invoice for Order #{order.id}"
    
    items_html = ""
    for item in order.items.all():
        items_html += f"""
        <tr>
            <td style="padding: 8px; border: 1px solid #ddd;">{item.product.title if item.product else 'Product Removed'}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">{item.quantity}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${item.price}</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${item.discounted_price}</td>
        </tr>
        """

    body = f"""
    <div style="font-family: Arial, sans-serif; max-width: 700px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="text-align: center; color: #333;">Invoice for Your Order #{order.id}</h2>
        <p>Hi {user.get_full_name()},</p>
        <p>Thank you for your purchase! Here are the details of your order:</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
                <tr>
                    <th style="padding: 8px; border: 1px solid #ddd; background: #f2f2f2;">Product</th>
                    <th style="padding: 8px; border: 1px solid #ddd; background: #f2f2f2;">Quantity</th>
                    <th style="padding: 8px; border: 1px solid #ddd; background: #f2f2f2;">Price</th>
                    <th style="padding: 8px; border: 1px solid #ddd; background: #f2f2f2;">Discounted Price</th>
                </tr>
            </thead>
            <tbody>
                {items_html}
            </tbody>
        </table>

        <p style="text-align: right; margin-top: 20px; font-weight: bold;">
            Total Amount: ${order.total_amount_with_discounte}
        </p>

        <p>Shipping Address: {order.destination}</p>
        <p>Invoice Status: {order.payment_status.title()}</p>
        <p>Order Status: {order.status.title()}</p>

        <p>Thank you for shopping with us!</p>
    </div>
    """

    email_message = EmailMessage(subject, body, settings.EMAIL_HOST_USER, [user.email])
    email_message.content_subtype = "html" 

    try:
        email_message.send()
        return {"success": True, "message": "Invoice email sent successfully"}
    except Exception as e:
        print(e)
        return {"error": str(e)}
