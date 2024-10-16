// projectData.ts

export interface ProjectItem {
    id: string;
    name: string;
    cost: number;
    description: string;
  }
  
  export interface ProjectGroup {
    id: string;
    name: string;
    items: ProjectItem[];
  }
  
  export const projectData: ProjectGroup[] = [
    {
      id: "part1",
      name: "Customer Experience",
      items: [
        { id: "accounts", name: "Customer Accounts", cost: 250000, description: "Allow customers to create and manage accounts, including viewing their order history and profile information." },
        { id: "integration", name: "Website Integration", cost: 300000, description: "Sync the app with your website, ensuring real-time updates of inventory, pricing, and promotions." },
        { id: "order-management", name: "Order Management", cost: 200000, description: "Enable customers to place, track, and manage orders directly through the website." },
        { id: "notifications", name: "In-App Notifications", cost: 150000, description: "Send order confirmations, shipping updates, and promotional offers to customers via push notifications." },
        { id: "support", name: "Customer Support", cost: 180000, description: "Include live chat or a customer support request form, linking to your customer service team or WhatsApp." },
        { id: "loyalty", name: "Loyalty Program", cost: 220000, description: "Implement a points or rewards system to encourage repeat purchases, viewable and manageable through the app." },
        { id: "reviews", name: "Feedback and Reviews", cost: 160000, description: "Enable customers to provide feedback and leave product reviews directly within the app." },
      ],
    },
    {
      id: "part2",
      name: "Staff Management",
      items: [
        { id: "inventory", name: "Inventory Management", cost: 280000, description: "Allow staff to view, add, or edit inventory directly from the app. Changes should sync with the website and back-end system in real-time." },
        { id: "order-processing", name: "Order Processing", cost: 200000, description: "Notify staff when a new order is placed, with details for preparing and shipping orders." },
        { id: "roles", name: "Staff Roles and Permissions", cost: 180000, description: "Differentiate roles with varying access levels (e.g., admin, sales, inventory management). Allow editing of staff details." },
        { id: "task-management", name: "Task Management", cost: 160000, description: "Enable assigning and tracking of staff tasks related to order fulfillment, inventory restocking, customer service, etc." },
        { id: "internal-comm", name: "Internal Communication", cost: 140000, description: "Provide an internal messaging system for staff communication." },
        { id: "analytics", name: "Analytics and Reporting", cost: 250000, description: "Allow staff (especially managers) to access sales, order, and inventory reports directly from the app." },
      ],
    },
    {
      id: "part3",
      name: "Integrations",
      items: [
        { id: "payment", name: "Payment Gateway Integration", cost: 300000, description: "Ensure seamless integration with payment providers for customer purchases, including mobile money, pay on delivery, and card payments." },
        { id: "shipping", name: "Shipping/Logistics Integration", cost: 250000, description: "Connect with shipping providers to update tracking information and provide shipping status to customers." },
        { id: "crm", name: "CRM Integration", cost: 200000, description: "Sync customer data with Zoho CRM for improved customer relationship management." },
        { id: "prescriptions", name: "Prescription Handling", cost: 150000, description: "Redirect orders with prescriptions to WhatsApp." },
      ],
    },
    {
      id: "part4",
      name: "Technical Improvements",
      items: [
        { id: "ui", name: "User-Friendly Interface", cost: 300000, description: "Ensure the design is intuitive, sleek, and easy to navigate for both customers and staff." },
        { id: "security", name: "Data Security", cost: 250000, description: "Implement strong data encryption and privacy protocols to protect customer and business data." },
        { id: "sync", name: "Real-Time Synchronization", cost: 200000, description: "Ensure that all data (inventory, orders, customer profiles) sync in real time between the app and website." },
        { id: "optimization", name: "App Performance Optimization", cost: 180000, description: "Optimize the app to load quickly and efficiently, even with large amounts of data or during high traffic periods." },
      ],
    },
    {
      id: "part5",
      name: "Advanced Analytics",
      items: [
        { id: "sales-analytics", name: "Sales Analytics", cost: 220000, description: "Provide detailed insights into daily, weekly, and monthly sales, including total revenue, best-selling products, and sales trends." },
        { id: "customer-behavior", name: "Customer Behavior Analytics", cost: 200000, description: "Track customer interactions within the app, such as frequently viewed products, time spent on product pages, and abandoned carts." },
        { id: "inventory-analytics", name: "Inventory Analytics", cost: 180000, description: "Generate reports on stock levels, restocking trends, and top-performing products to optimize inventory management." },
        { id: "order-analytics", name: "Order Analytics", cost: 160000, description: "Provide metrics on order fulfillment times, number of orders processed, and average order value." },
        { id: "customer-segmentation", name: "Customer Segmentation", cost: 190000, description: "Categorize customers based on purchase behavior, frequency, and value, allowing for targeted marketing campaigns." },
        { id: "staff-performance", name: "Staff Performance Analytics", cost: 170000, description: "Track staff performance metrics, such as order processing time, customer interaction stats, and task completion rates." },
        { id: "invoicing", name: "Invoicing System", cost: 150000, description: "Automatically generate invoices and receipts for customer orders, with the ability to send them directly via email or WhatsApp." },
        { id: "export", name: "Export Analytics", cost: 120000, description: "Export reports or analytics to email or WhatsApp." },
        { id: "expense-tracking", name: "Expense Tracking", cost: 140000, description: "Enable staff to log business expenses directly in the app for accurate financial tracking." },
        { id: "payment-reconciliation", name: "Payment Reconciliation", cost: 160000, description: "Match mode of incoming payments from customers with the corresponding sales orders." },
        { id: "profit-loss", name: "Profit and Loss Reports", cost: 180000, description: "Provide a breakdown of revenue, cost of goods sold (COGS), and other expenses to monitor profit margins." },
      ],
    },
    {
      id: "part6",
      name: "Inventory Management",
      items: [
        { id: "inventory-alerts", name: "Inventory Level Alerts", cost: 140000, description: "Set up automated alerts for low stock levels, prompting the creation of purchase orders when inventory reaches a predefined threshold." },
        { id: "supplier-info", name: "Supplier Information Storage", cost: 120000, description: "Store supplier details, including name, contact information, and preferred payment terms, for easy access during the procurement process." },
        { id: "po-tracking", name: "Detailed Purchase Order Tracking", cost: 180000, description: "Track individual items on purchase orders, including item name, SKU, quantity, color, size, and other customizable properties." },
        { id: "cost-breakdown", name: "Order Cost Breakdown", cost: 150000, description: "Include details such as unit cost, total order cost, shipping cost, and any applicable taxes or duties." },
        { id: "shipment-tracking", name: "Shipment Tracking", cost: 160000, description: "Track shipping details such as expected delivery date, shipping provider, tracking number, and shipping costs." },
        { id: "receiving", name: "Receiving Confirmation and Cross-Checking", cost: 140000, description: "Enable staff to confirm receipt of goods, and automatically compare received quantities against ordered quantities to ensure accuracy." },
        { id: "quality-control", name: "Quality Control Integration", cost: 170000, description: "Allow staff to mark items as 'approved' or 'rejected' based on quality control checks before updating the inventory." },
        { id: "auto-inventory", name: "Automatic Inventory Updates", cost: 160000, description: "Once items are received and approved through the quality control process, automatically update inventory levels to reflect the new stock." },
        { id: "partial-delivery", name: "Partial Delivery Management", cost: 150000, description: "Track partial deliveries and update the inventory for only the items received and approved, while keeping the remaining items open in the purchase order." },
        { id: "damaged-goods", name: "Damaged or Rejected Goods", cost: 130000, description: "Track and manage rejected or damaged items." },
        { id: "po-history", name: "Purchase Order History", cost: 140000, description: "Maintain a full history of past purchase orders, including quantities, costs, supplier details, and order status for easy reference and reordering." },
        { id: "auto-reconciliation", name: "Automated Inventory Reconciliation", cost: 180000, description: "Automatically reconcile inventory data with purchase orders to ensure all incoming goods are accurately accounted for in your inventory management system." },
        { id: "stock-discrepancies", name: "Alerts for Stock Discrepancies", cost: 130000, description: "Set up alerts for any discrepancies between ordered and received quantities, helping staff investigate potential issues quickly." },
      ],
    },
    {
      id: "part7",
      name: "Pricing Management",
      items: [
        { id: "margin-settings", name: "Margin & Markup Settings", cost: 160000, description: "Set desired profit margins or markup percentages to calculate the final selling price of each product." },
        { id: "discounts", name: "Discounts and Promotions", cost: 170000, description: "Set and manage promotional prices, temporary discounts, or clearance pricing for specific products or time periods." },
        { id: "margin-analysis", name: "Cost & Profit Margin Analysis", cost: 180000, description: "Analyze cost vs. selling price and show potential profit margins before finalizing the selling price and orders too." },
        { id: "batch-price", name: "Batch Price Updates", cost: 150000, description: "Update prices in bulk for multiple products simultaneously, saving time when updating seasonal or promotional pricing." },
        { id: "price-override", name: "Price Override Permissions", cost: 140000, description: "Allow authorized staff to manually override prices for special cases, with tracking of any changes made." },
      ],
    },
  ];