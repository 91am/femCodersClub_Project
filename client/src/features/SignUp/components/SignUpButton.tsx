import { styles } from "../../../style"

const SignUpButton = ({onSubmit}) => {
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="submit" onSubmit={onSubmit} className={`${styles.primaryBtn}`}>Regístrarme</button>

            {/* <button type="submit" onSubmit={onSubmit} className="text-primary bg-tertiary hover:text-contrast hover:bg-contrast/20 font-medium rounded-[8px] text-[18px] h-[40px] w-full shadow-lg border-b-2 border-contrast/5 shadow-accent/20 me-2">Regístrarme</button> */}
        </div>
    )
    }

export default SignUpButton