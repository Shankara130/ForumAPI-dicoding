const ThreadDetails = require('../ThreadDetails');

describe('a ThreadDetails entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
            title: 'abc',
            body: 'abc',
            date: '2021-08-08T07:22:13.017Z',
            username: 'abc',
            comments: [],
        };

        // Action and Assert
        expect(() => new ThreadDetails(payload)).toThrowError('THREAD_DETAILS.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            id: 123,
            title: 'abc',
            body: 'abc',
            date: '2021-08-08T07:22:13.017Z',
            username: 'abc',
            comments: [],
        };

        // Action and Assert
        expect(() => new ThreadDetails(payload)).toThrowError('THREAD_DETAILS.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            id: 'thread-123',
            title: 'abc',
            body: 'abc',
            date: '2021-08-08T07:22:13.017Z',
            username: 'abc',
            comments: [],
        };

        // Action and Assert
        const threadDetails = new ThreadDetails(payload);
        expect(threadDetails).toBeDefined();
    });
});