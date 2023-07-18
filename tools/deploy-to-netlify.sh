#!/bin/sh

yarn build
curl https://github.com/softinvest/softalert2 -o index.html
sed -i 's|"//cdn.jsdelivr|"https://cdn.jsdelivr|g' index.html
sed -i 's|src="/|src="https://github.com/softinvest/softalert2/|g' index.html
sed -i 's|https://cdn.jsdelivr.net/npm/softalert2@11/||g' index.html
sed -i 's|="./|="https://github.com/softinvest/softalert2/|g' index.html
sed -i 's|="/|="https://github.com/softinvest/softalert2/|g' index.html
