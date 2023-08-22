const Form = ({  onSubmit  }) => {
    const safeSubmit = event => {
        event.preventDefault()
        event.stopPropagation()
        const name = event.target[0].value
        const email = event.target[1].value
        onSubmit({ name, email })
    }

    return <form onSubmit={safeSubmit} className="h-full flex flex-col items-center justify-center gap-4 -mt-40 mx-5">
        <label className="pt-4 pl-5 w-full max-w-lg text-dark-200 dark:text-gray-200">Nome:</label>
        <input type="text" className="gc-input" required placeholder="Insira seu nome" />
        <label className="pt-4 pl-5 w-full max-w-lg text-dark-200 dark:text-gray-200">E-mail:</label>
        <input type="email" className="gc-input" required placeholder="Insira seu e-mail" />
        <button type="submit" className="button">Seguir</button>
    </form>

}

export default Form 