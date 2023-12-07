"""<your project name here>

<your project description here>
"""

# Local
from typing import Any

from . import _exceptions, _types, cli, utils
from .__metadata__ import __author__, __description__, __license__, __title__
from .__version__ import __version__

_deprecated: dict[str, Any] = {}


def __getattr__(name: str) -> Any:
    if name in _deprecated:
        import warnings

        real = _deprecated[name]
        warnings.warn(
            f"{name} is deprecated, please use {real.__name__} instead",
            DeprecationWarning,
            stacklevel=2,
        )
        return real
    raise AttributeError(f"module {__name__!r} has no attribute {name!r}")


# Public Re-Exports
__all__ = [
    "cli",
    "utils",
    "_exceptions",
    "_types",
    "__title__",
    "__description__",
    "__version__",
    "__author__",
    "__license__",
]

__all__.extend(_deprecated)
