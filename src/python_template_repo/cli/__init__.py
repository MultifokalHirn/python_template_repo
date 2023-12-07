import logging

from ..utils.logging import setup_logger
from .cli import CLI

__title__ = "cli"
__description__ = """
This is the cli module of the python_template_repo package.
"""


def main() -> int:
    """Main entry point for the application."""
    LOG = setup_logger(logger_name=__name__, log_level=logging.DEBUG)
    LOG.info("Starting cli...")
    cli = CLI()
    cli.echo("hello world")
    return 0


__all__ = ["CLI", "main"]
