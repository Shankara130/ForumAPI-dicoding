const NewCommentReply = require('../NewCommentReply');

describe('a NewCommentReply entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {};

        // Action & Assert
        expect(() => new NewCommentReply(payload)).toThrowError('NEW_COMMENT_REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            content: 123,
        };

        // Action & Assert
        expect(() => new NewCommentReply(payload)).toThrowError('NEW_COMMENT_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should throw error when payload is empty string', () => {
        // Arrange
        const payload = {
            content: '    ',
        };

        // Action & Assert
        expect(() => new NewCommentReply(payload)).toThrowError('NEW_COMMENT_REPLY.STRING_SHOULD_NOT_EMPTY');
    });

    it('should create newCommentReply object correctly', () => {
        // Arrange
        const payload = {
            content: 'sebuah comment',
        };

        // Action
        const newCommentReply = new NewCommentReply(payload);

        // Assert
        expect(newCommentReply.content).toEqual(payload.content);
    });
});