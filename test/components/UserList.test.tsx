import { render, screen } from "@testing-library/react";
import UserList from "../../src/components/UserList";

describe("UserList", () => {
  it("should check for no users", () => {
    render(<UserList users={[]} />);
    expect(screen.getByText(/No users/i)).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Azzam" },
      { id: 2, name: "Saleh" },
      { id: 3, name: "Saad" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});
