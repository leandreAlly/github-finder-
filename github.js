class GitHub {
  constructor() {
    this.client_id = "5c3e43bfa0de26d66a52";
    this.client_secret = "2dd3e26d1e4e71374fad9eecaca52b84d18acce0";
    this.repos_count = "5";
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos: repos,
    };
  }
}
