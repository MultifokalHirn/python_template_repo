from typing import NamedTuple


class MyClass(NamedTuple):
    name: str
    secret: str | None = None

    def __rich__(self) -> str:
        lines: list[str] = []
        lines.append(f"[primary]name[/] = {self.name}")
        if self.secret is not None:
            lines.append(f"[error]secret[/] = {self.secret}")
        return "\n".join(lines)


# if TYPE_CHECKING:
if True:
    from typing import Any, Protocol, TypeVar

    class RichProtocol(Protocol):
        def __rich__(self) -> str:
            ...

    SpinnerT = TypeVar("SpinnerT", bound="Spinner")

    class Spinner(Protocol):
        def update(self, text: str) -> None:
            ...

        def __enter__(self: SpinnerT) -> SpinnerT:
            ...

        def __exit__(self, *args: Any) -> None:
            ...
