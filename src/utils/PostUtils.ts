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

export const getPostColorFromType = (type:string) => {
    switch (type) {
        case 'Full Time':
            return 'cyan'
        case 'Part Time':
            return 'violet'
        case 'Contract':
            return 'lime'
        default:
            return 'pink'
    }
}

export const getColorFromPositionCategory = (category:string) => {
    switch (category) {
        case 'Engineering':
            return 'violet'
        case 'Product':
            return 'lime'
        case 'Marketing':
            return 'cyan'
        default:
            return 'pink'
    }
}