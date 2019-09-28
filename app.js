console.log('worked');
// выкидываем всё лишнее, что не нужно для решения
const buzova = {
    id: 'buzova86',
    avatarUrl: 'https://scontent-arn2-1.cdninstagram.com/vp/e24c6f401983834e27247c3542022660/5E1B7CB0/t51.2885-19/s150x150/69672885_368328154091538_8485268536803983360_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com',
    verified: true,
}
const photo = {
    id: 'B23d82NooNF',
    author: buzova,
    location: 'Набережная Амура. Граница с Китаем',
    imageUrl: 'https://placetitten.com/800/800',
    videoUrl: null,
    likes: 159594,

};
//undfined и null можно записать где угодно
//пост с видео
const video = {
    id: 'B23d82NooNX',
    author: buzova,
    location: 'Тщргово-развлекательный комплекс Острова',
    image: 'https://placetitten.com/800/800',
    videoUrl = 'https://youtube.com/...',
    likes: 159594,
};