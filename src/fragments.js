export const COMMENT_FRAGMENT = `
    fragment CommenteParts on Comment{
        id
        text
        user {
            username
        }
    }
`;
