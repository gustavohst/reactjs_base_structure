export function RepositoryItem(props){

    const {
        name,
        description,
        link,
    } = props.repository;

    return(
        <li>
            <strong>{name ?? 'Default'}</strong>
            <p>{description}</p>

            <a href={link}>
                Acess the repository
            </a>
        </li>
    );
}