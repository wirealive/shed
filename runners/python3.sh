#!/usr/bin/env bash
source /opt/shed/shared.sh

run /usr/bin/python3 ${FCODE} < ${FSTDIN}
