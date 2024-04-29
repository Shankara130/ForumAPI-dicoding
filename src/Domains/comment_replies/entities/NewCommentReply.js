class NewCommentReply {
    constructor(payload) {
        this._verifyPayload(payload);

        const { content } = payload;

        this.content = content;
    }

    _verifyPayload({ content }) {
        if (!content) {
            throw new Error('NEW_COMMENT_REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
        }

        if (typeof content !== 'string') {
            throw new Error('NEW_COMMENT_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION');
        }

        if (content.trim().length === 0) {
            throw new Error('NEW_COMMENT_REPLY.STRING_SHOULD_NOT_EMPTY');
        }
    }
}

module.exports = NewCommentReply;