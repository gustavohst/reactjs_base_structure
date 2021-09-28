const repositoryName = "UNFORM"

export function RepositoryList() {
	return (
		<section className="repository-list">
			<h1>Repository List</h1>

			<ul>
				<li>
					<strong>{repositoryName}</strong>
					<p>Forms in react</p>

					<a href="">
						Acess the repository
					</a>
				</li>
				<li>
					<strong>Unform</strong>
					<p>Forms in react</p>

					<a href="">
						Acess the repository
					</a>
				</li>
			</ul>

		</section>
	)
}