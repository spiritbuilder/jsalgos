/*
v88 quivr/nginx/default.conf

// /var/www/quivr/
// /var/www/quivr/nginx/default.conf**

# Define upstream servers
upstream frontend {
    server 127.0.0.1:3000;
}

upstream backend {
    server 127.0.0.1:5050;
}

# Server block for handling HTTP requests
server {
    listen 80;
    server_name _;  # Replace with your domain
  location / {
        proxy_pass 127.0.0.1:3000;  # Pass requests to the upstream frontend server
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_buffers 32 64k;
        proxy_buffer_size 128k;
    }


    location /api/ {
        proxy_pass 127.0.0.1:5050;  # Pass requests to the upstream backend server
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_buffers 32 64k;
        proxy_buffer_size 128k;
    }
    # Redirect all HTTP requests to HTTPS
    # return 301 https://$host$request_uri/;
}

# Server block for handling HTTPS requests
server {
    listen 443 ssl;  # Listen for HTTPS connections
    server_name your_domain.com;  # Replace with your domain

    # Point to the Let's Encrypt certificates
    ssl_certificate /etc/letsencrypt/live/your_domain.com/fullchain.pem; # Replace with the path to your fullchain.pem
    ssl_certificate_key /etc/letsencrypt/live/your_domain.com/privkey.pem; # Replace with the path to your privkey.pem

    # Strong SSL security settings (You may have to adjust or provide this configuration)
    include /etc/letsencrypt/options-ssl-nginx.conf; # Ensure this file exists and is configured
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # Ensure this file exists and is configured

    # Log files for debugging (optional, ensure the directory for logs exists or adjust as necessary)
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log;

    # Set maximum allowed size of the client request body
    client_max_body_size 954m;

    # Proxy settings for frontend
    location / {
        proxy_pass http://frontend/;  # Pass requests to the upstream frontend server
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_buffers 32 64k;
        proxy_buffer_size 128k;
    }

   # Proxy settings for backend/API
    location /api/ {
        proxy_pass http://backend/;  # Pass requests to the upstream backend server
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_buffers 32 64k;
        proxy_buffer_size 128k;
    }
}
*/


/*


API URL: http://127.0.0.1:54321
     GraphQL URL: http://127.0.0.1:54321/graphql/v1
          DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
      Studio URL: http://127.0.0.1:54323
    Inbucket URL: http://127.0.0.1:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU

*/


/*

server {
    listen 80;
    server_name guidanceplatform.co www.guidanceplatform.co;  # Replace with your domain

    # Redirect all HTTP requests to HTTPS
    return 301 https://$host$request_uri/;
}

# Server block for handling HTTPS requests
server {
    listen 443 ssl;  # Listen for HTTPS connections
    server_name guidanceplatform.co www.guidanceplatform.co;  # Replace with your domain



    # Proxy settings for frontend
    location / {
        proxy_pass 127.0.0.1:3000;  # Pass requests to the upstream frontend server
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_buffers 32 64k;
        proxy_buffer_size 128k;
    }

   # Proxy settings for backend/API
    location /api/ {
        proxy_pass 127.0.0.1:5050;  # Pass requests to the upstream backend server
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_buffers 32 64k;
        proxy_buffer_size 128k;
    }
}



*/


let x={
    "id": 12991,
    "name": "Immungain Vitamin",
    "business_id": 6,
    "type": "single",
    "single_dpp": "123",
    "single_dpp_inc_tax": "123",
    "profit_percent": "123",
    "single_dsp": "274.29",
    "single_dsp_inc_tax": 274.29,
    "single_variation_id": 12991,
    "secondary_unit_id": null,
    "tax": "1",
    "tax_type": "inclusive",
    "barcode_type": "FC128",
    "unit_id": 12,
    "sub_unit_ids": null,
    "enable_stock": 0,
    "alert_quantity": "2.0000",
    "sku": "immugainABXC",
    "expiry_period": null,
    "expiry_period_type": null,
    "expiry_date": null,
    "enable_sr_no": 0,
    "weight": "1.28",
    "product_custom_field1": null,
    "product_custom_field2": null,
    "product_custom_field3": null,
    "product_custom_field4": null,
    "product_custom_field5": null,
    "product_custom_field6": null,
    "product_custom_field7": null,
    "product_custom_field8": null,
    "product_custom_field9": null,
    "product_custom_field10": null,
    "product_custom_field11": null,
    "product_custom_field12": null,
    "product_custom_field13": null,
    "product_custom_field14": null,
    "product_custom_field15": null,
    "product_custom_field16": null,
    "product_custom_field17": null,
    "product_custom_field18": null,
    "product_custom_field19": null,
    "product_custom_field20": null,
    "image": null,
    "woocommerce_media_id": null,
    "product_description": null,
    "created_by": 35,
    "woocommerce_product_id": null,
    "woocommerce_disable_sync": 0,
    "preparation_time_in_minutes": null,
    "warranty_id": null,
    "is_inactive": 0,
    "not_for_selling": 0,
    "brand_id": "",
    "category_id": "10",
    "sub_category": null,
    "product_tax": null,
    "product_locations": []
}