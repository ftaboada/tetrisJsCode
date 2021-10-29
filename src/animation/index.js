export const clearBoxAnimation = () => [
    { borderRadius: '50%', offset: 0.3 },
    {
        backgroundColor: 'white',
        boxShadow: ' 0 0 20px #f0f'
    },
    { opacity: 0, transform: 'translateY(-40px)' }
]
export const timing = (delay) => {
    return {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out',
        direction: 'alternate',
        delay
    }
}
