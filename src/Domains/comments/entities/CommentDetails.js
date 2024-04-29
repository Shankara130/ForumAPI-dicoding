class CommentDetails {
    constructor(payload) {
        this._validatePayload(payload);

        const { id, username, date, content, replies } = payload;

        this.id = id;
        this.username = username;
        this.date = date;
        this.content = content;
        this.replies = replies;
    }

    _validatePayload({ id, username, date, content, replies }) {
        if (!id || !username || !date || !content || !replies) {
            throw new Error('COMMENT_DETAILS.NOT_CONTAIN_NEEDED_PROPERTY');
        }

        if (typeof id !== 'string' || typeof username !== 'string' || typeof date !== 'string' || typeof content !== 'string' || !Array.isArray(replies)) {
            throw new Error('COMMENT_DETAILS.NOT_MEET_DATA_TYPE_SPECIFICATION');
        }
    }
}

module.exports = CommentDetails;