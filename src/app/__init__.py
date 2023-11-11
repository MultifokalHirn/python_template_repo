import logging

# import sys
from utils.logging import setup_logger

__title__ = "app"
__description__ = "Contains the app service."


def run() -> int:
    """Main entry point for the application."""
    LOG = setup_logger(logger_name=__name__, log_level=logging.DEBUG)
    LOG.info("Starting app service...")
    return 0


# if __name__ == "__main__":
#
#     run()
#     sys.exit(run())
