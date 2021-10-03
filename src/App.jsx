import { Counter } from './styles/components/Counter';
import { RepositoryList } from './styles/components/RepositoryList'
import './styles/global.scss'

export function App() {
    return (
        <>
            <RepositoryList></RepositoryList>
            <Counter />
        </>
    )
}