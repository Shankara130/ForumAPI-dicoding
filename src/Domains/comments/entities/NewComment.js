class NewComment {
    constructor(payload) {
        this._validatePayload(payload);

        const { content } = payload;
        this.content = content;
    }

    _validatePayload({ content }) {
        if (!content) {
            throw new Error('NEW_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
        }

        if (typeof content !== 'string') {
            throw new Error('NEW_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
        }

        if (content.trim().length === 0) {
            throw new Error('NEW_COMMENT.STRING_SHOULD_NOT_EMPTY');
        }
    }
}

module.exports = NewComment;