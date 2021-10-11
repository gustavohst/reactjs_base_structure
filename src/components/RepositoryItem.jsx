export function RepositoryItem(props){

    const {
        name,
        description,
        html_url,
    } = props.repository;

    return(
        <li>
            <strong>{name}</strong>
            <p>{description}</p>

            <a href={html_url}>
                Acess the repository
            </a>
        </li>
    );
}