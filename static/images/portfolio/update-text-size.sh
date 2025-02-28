#!/bin/bash

# List of all SVG files in the directory
svg_files=$(ls *.svg)

# Update each SVG file with larger text
for file in $svg_files; do
  # Extract the company name from the file (remove .svg extension)
  company_name=$(basename "$file" .svg)
  
  # For squid.svg, use the company name "Squid"
  if [ "$company_name" = "squid" ]; then
    display_name="Squid"
  # For fortytwo.svg, we've already updated it
  elif [ "$company_name" = "fortytwo" ]; then
    continue
  else
    # Capitalize first letter of company name
    display_name=$(echo "$company_name" | sed 's/\b\(.\)/\u\1/g')
  fi
  
  # Create new SVG content with larger font
  cat > "$file" << EOF
<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="none"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">$display_name</text>
</svg>
EOF

  echo "Updated $file with larger text"
done

echo "All SVGs updated with larger text" 