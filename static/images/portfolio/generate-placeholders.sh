#!/bin/bash

# List of portfolio companies
companies=("fortytwo" "pschedelic" "stride" "ethos" "levana" "keplr" "timewave" "convexity" "noble" "saline")

# Generate SVG for each company
for company in "${companies[@]}"; do
  cat > "${company}.svg" << EOF
<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="none"/>
  <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">${company}</text>
</svg>
EOF
  echo "Created ${company}.svg"
done 