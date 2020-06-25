ENVIRONMENT=${1:-dev}
[[ $ENVIRONMENT != prod ]] && HOST="$ENVIRONMENT". || HOST=""

# - update swagger documentation
cp ./swagger/swagger.template.yaml ./swagger/swagger.yaml 
sed -i '' "s/||environment||/"$HOST"faithinventory.com/g" ./swagger/swagger.yaml

# - update redoc template
cp ./redoc/redoc.template.hbs ./redoc/redoc.hbs 
sed -i '' "s/||environment||/"$HOST"faithinventory.com/g" ./redoc/redoc.hbs

#create redoc file and move to ./redoc folder
redoc-cli bundle ./swagger/swagger.yaml			\
	-t ./redoc/redoc.hbs						\
	--options.hideLoading						\
	--options.hideDownloadButton				\
	--options.expandResponses="all"

RENDER_FOLDER="./build"
RENDER_FOLDER_DOCS_PATH="$RENDER_FOLDER"/api/1/docs
rm -rf $RENDER_FOLDER
mkdir -p $RENDER_FOLDER_DOCS_PATH
mv ./redoc-static.html "$RENDER_FOLDER_DOCS_PATH"/index.html
cp -r ./redoc/img "$RENDER_FOLDER_DOCS_PATH"/img
cp -r ./redoc/css "$RENDER_FOLDER_DOCS_PATH"/css
