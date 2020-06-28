ENVIRONMENT=${1:-dev}
TARGET_S3_BUCKET="${ENVIRONMENT}"-thalliumeli-api-docs
AWS_PROFILE=$2
sh ./scripts/render.sh $ENVIRONMENT --profile $AWS_PROFILE
aws s3 sync ./build s3://$TARGET_S3_BUCKET --delete --exclude '*.DS_Store' --profile $AWS_PROFILE
CLOUDFRONT_DISTRIBUTION_ID=$(aws cloudformation list-exports --query "Exports[?Name=='${ENVIRONMENT}-BariumNahumCDNDistributionId'].Value" --output text --profile $AWS_PROFILE)
aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths '/*' --profile $AWS_PROFILE