module.exports = (webhook, matrix) => {
    if (!matrix.sender.avatar_url && webhook.avatar_url)
        matrix.sender.avatar_url = webhook.avatar_url;

    if (!matrix.sender.avatar_url && webhook.avatarUrl)
        matrix.sender.avatar_url = webhook.avatarUrl;
};
