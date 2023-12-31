# import json
# import logging
# from collections.abc import Iterator
# from io import StringIO
# from typing import Any

# import pytest


# class JSONLogIO(StringIO):
#     """Helper to capture logs and convert the raw JSON string into a proper dict."""

#     def __init__(self, *args: Any, **kwargs: Any):
#         super().__init__(*args, **kwargs)
#         self._entries: list[dict] = []

#     @property
#     def entries(self) -> list[dict]:
#         # build _entries only once
#         if not self._entries:
#             self._entries = [json.loads(line) for line in self.getvalue().splitlines()]

#         return self._entries


# @pytest.fixture()
# def log_capture() -> Iterator[JSONLogIO]:
#     """To capture our custom logger based on structlog."""
#     logger = logging.getLogger()

#     # we need a custom handler
#     buffer = JSONLogIO()
#     log_handler = logging.StreamHandler(buffer)
#     logger.addHandler(log_handler)

#     yield buffer

#     # teardown
#     logger.removeHandler(log_handler)
