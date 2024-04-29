const CommentReplyDetails = require('../CommentReplyDetails');

describe('a CommentReplyDetails entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
            content: 'sebuah comment',
            date: '2021-08-08T07:22:58Z',
            username: 'dicoding',
        };

        // Action & Assert
        expect(() => new CommentReplyDetails(payload)).toThrowError('COMMENT_REPLY_DETAILS.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            id: 'reply-123',
            content: 'sebuah comment',
            date: 123,
            username: 'dicoding',
        };

        // Action & Assert
        expect(() => new CommentReplyDetails(payload)).toThrowError('COMMENT_REPLY_DETAILS.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            id: 'reply-123',
            content: 'sebuah comment',
            date: '2021-08-08T07:22:58Z',
            username: 'dicoding',
        };

        // Action & Assert
        const commentReplyDetails = new CommentReplyDetails(payload);
        expect(commentReplyDetails).toBeDefined();
    });
});