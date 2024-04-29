const NewComment = require('../NewComment');

describe('a NewComment entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
            // content: 'abc',
        };

        // Action and Assert
        expect(() => new NewComment(payload)).toThrowError('NEW_COMMENT.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            content: 123,
        };

        // Action and Assert
        expect(() => new NewComment(payload)).toThrowError('NEW_COMMENT.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should throw error when payload string is empty', () => {
        // Arrange
        const payload = {
            content: '   ',
        };

        // Action and Assert
        expect(() => new NewComment(payload)).toThrowError('NEW_COMMENT.STRING_SHOULD_NOT_EMPTY');
    });

    it('should create newComment object correctly', () => {
        // Arrange
        const payload = {
            content: 'abc',
        };

        // Action
        const newComment = new NewComment(payload);

        // Assert
        expect(newComment).toBeInstanceOf(NewComment);
        expect(newComment.content).toEqual(payload.content);
    });
});