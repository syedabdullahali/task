interface Icon {
    className?: string,
    size?: string
}


const DeleteIcon = (props: Icon) => (

    <svg  {...props} width={props.size || "24"} height={props.size || "24"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M7 4V2H17V4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7ZM6 6V20H18V6H6ZM9 9H11V17H9V9ZM13 9H15V17H13V9Z">
        </path>
    </svg>
);

const EditIcon = (props: Icon) => (

    <svg {...props} width={props.size || "24"} height={props.size || "24"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.7574 2.99678L14.7574 4.99678H5V18.9968H19V9.23943L21 7.23943V19.9968C21 20.5491 20.5523 20.9968 20 20.9968H4C3.44772 20.9968 3 20.5491 3 19.9968V3.99678C3 3.4445 3.44772 2.99678 4 2.99678H16.7574ZM20.4853 2.09729L21.8995 3.5115L12.7071 12.7039L11.2954 12.7064L11.2929 11.2897L20.4853 2.09729Z">
        </path>
    </svg>
);


export { DeleteIcon, EditIcon }
