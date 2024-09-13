export const getPostColorFromCategory = (category:string) => {
    switch (category) {
        case 'Sustainability':
            return 'violet'
        case 'Innovation':
            return 'lime'
        case 'Security':
            return 'cyan'
        default:
            return 'pink'
    }
}