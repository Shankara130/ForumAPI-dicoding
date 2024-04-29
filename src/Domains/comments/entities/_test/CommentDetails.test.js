const CommentDetails = require('../CommentDetails');

describe('a CommentDetails entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
            username: 'dicoding',
            date: '2021-08-08T07:22:33.555Z',
            content: 'sebuah comment',
            replies: [],
        };

        // Action and Assert
        expect(() => new CommentDetails(payload)).toThrowError('COMMENT_DETAILS.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            id: '123',
            username: 'dicoding',
            date: '2021-08-08T07:22:33.555Z',
            content: 'sebuah comment',
            replies: '[]',
        };

        // Action and Assert
        expect(() => new CommentDetails(payload)).toThrowError('COMMENT_DETAILS.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });
    
    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            id: '123',
            username: 'dicoding',
            date: '2021-08-08T07:22:33.555Z',
            content: 'sebuah comment',
            replies: [],
        };

        // Action and Assert
        const commentDetails = new CommentDetails(payload);
        expect(commentDetails).toBeDefined();
    });
});
