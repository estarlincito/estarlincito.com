module default {
    type User {
        required property name: str;
        required property email: str {
            constraint exclusive;
        }
        required property password: str;
    }
}