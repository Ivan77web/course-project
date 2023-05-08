## Сущность User

Описание - сущность юзера содержит в себе все данные о юзере:

1)  authData?: User;
2)  _inited: boolean;

User:

1)  id: string;
2)  username: string;
3)  avatar?: string;
4)  roles?: UserRole[];