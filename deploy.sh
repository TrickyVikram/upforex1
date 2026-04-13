
#!/bin/bash

echo "🔄 Starting www redirect setup..."

# Step 1: Copy redirect config to NGINX config folder
sudo cp ./devops/nginx/redirect.conf /etc/nginx/sites-available/upforex_redirect

# Step 2: Create symlink to sites-enabled if it doesn't exist
if [ ! -f /etc/nginx/sites-enabled/upforex_redirect ]; then
  sudo ln -s /etc/nginx/sites-available/upforex_redirect /etc/nginx/sites-enabled/
fi

# Step 3: Test NGINX config
echo "🔍 Testing nginx configuration..."
sudo nginx -t

# Step 4: Reload NGINX only if config is valid
if [ $? -eq 0 ]; then
  echo "✅ NGINX config is valid. Reloading..."
  sudo systemctl reload nginx
  echo "🚀 Redirect applied successfully from upforex.com → www.upforex.com"
else
  echo "❌ NGINX config has errors. Fix required before reload."
fi
