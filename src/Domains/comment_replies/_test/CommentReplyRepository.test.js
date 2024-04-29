const CommentReplyRepository = require('../CommentReplyRepository');

describe('a CommentReplyRepository', () => {
    it('should throw error when invoke abstract behavior', async () => {
        // Arrange
        const commentReplyRepository = new CommentReplyRepository();

        // Action & Assert
        await expect(commentReplyRepository.createCommentReply('', '', '', '')).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
        await expect(commentReplyRepository.getCommentRepliesByCommentId('')).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
        await expect(commentReplyRepository.getCommentReplyById('')).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
        await expect(commentReplyRepository.deleteCommentReply('', '', '', '')).rejects.toThrowError('COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    });
});