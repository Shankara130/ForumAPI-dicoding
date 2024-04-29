const AddedCommentReply = require('../AddedCommentReply');

describe('a AddedCommentReply entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
            id: 'reply-123',
            title: 'ini title',
            user: 'user-123',
        };

        // Action & Assert
        expect(() => new AddedCommentReply(payload)).toThrowError('ADDED_COMMENT_REPLY.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            id: 'reply-123',
            content: 'sebuah comment',
            owner: 123,
        };

        // Action & Assert
        expect(() => new AddedCommentReply(payload)).toThrowError('COMMENT_REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should create AddedCommentReply object correctly', () => {
        // Arrange
        const payload = {
            id: 'reply-123',
            content: 'sebuah comment',
            owner: 'dicoding',
        };

        // Action
        const addedCommentReply = new AddedCommentReply(payload);

        // Assert
        expect(addedCommentReply.id).toEqual(payload.id);
        expect(addedCommentReply.content).toEqual(payload.content);
        expect(addedCommentReply.username).toEqual(payload.username);
    });
});